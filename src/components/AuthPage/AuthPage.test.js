import React, { Component } from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AuthPage from "./AuthPage";



test("renders correctly", () => {
  const component = shallow(<AuthPage />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
