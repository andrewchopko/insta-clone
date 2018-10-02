import React, { Component } from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Header from "./Header";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("renders correctly", () => {
  const component = shallow(<Header />)
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});