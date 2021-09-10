import React, { Component } from "react";
import { Transition } from "@headlessui/react";
import HeaderComponent from "./HeaderComponent";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChildActive: false,
      isNotChildActive: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = window.scrollY;
    if (scrollTop > 100) {
      this.setState({ isChildActive: true });
      this.setState({ isNotChildActive: false });
    } else {
      this.setState({ isChildActive: false });
      this.setState({ isNotChildActive: true });
    }
  };

  render() {
    return (
      <div>
        <Transition appear={true} show={this.state.isNotChildActive}>
          <Transition.Child
            enter="transition delay-500 duration-300 ease-out"
            enterFrom="transform scale-y-0 -translate-y-2/4"
            enterTo="transform scale-y-100 translate-y-0"
            leave="delay-0 duration-0 ease-in-out"
            leaveFrom="transform scale-y-100"
            leaveTo="transform scale-y-100"
          >
            <div className="w-10/12 mt-8 absolute inset-x-0 mx-auto max-w-screen-2xl z-20">
              <HeaderComponent />
            </div>
          </Transition.Child>
        </Transition>
        <Transition appear={true} show={this.state.isChildActive}>
          <Transition.Child
            enter="transition delay-500 duration-700 ease-in-out mx-auto fixed w-full z-20"
            enterFrom="transform scale-y-0 translate-y-full"
            enterTo="transform scale-y-100 translate-y-0"
            leave="delay-0 duration-0 ease-in-out"
            leaveFrom="transform scale-y-100"
            leaveTo="transform scale-y-0"
          >
            <div className="mx-auto fixed w-full z-10">
              <HeaderComponent />
            </div>
          </Transition.Child>
        </Transition>
      </div>
    );
  }
}

export default Header;
