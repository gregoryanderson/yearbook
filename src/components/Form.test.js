import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

describe("Form", () => {
  it("should update the state when a name is entered into the input", () => {
    const wrapper = shallow(<Form addNewPerson={jest.fn()} />);
    const correctInput = wrapper.find("input").at(0);
    correctInput.simulate("change", {
      target: { value: "Greg", name: "name" }
    });
    expect(wrapper.state("name")).toEqual("Greg");
  });

  it("should update the state when a quote is entered into the input", () => {
    const wrapper = shallow(<Form addNewPerson={jest.fn()} />);
    const correctInput = wrapper.find("input").at(1);
    correctInput.simulate("change", {
      target: { value: "gravy", name: "quote" }
    });
    expect(wrapper.state("quote")).toEqual("gravy");
  });

  it("should update the state when a quote is entered into the input", () => {
    const wrapper = shallow(<Form addNewPerson={jest.fn()} />);
    const correctInput = wrapper.find("input").at(2);
    correctInput.simulate("change", {
      target: { value: "most likely to drink gravy", name: "superlative" }
    });
    expect(wrapper.state("superlative")).toEqual("most likely to drink gravy");
  });

  it("should create a new person when the submit button is clicked", () => {
    const addNewPersonMock = jest.fn();
    const wrapper = shallow(<Form addNewPerson={addNewPersonMock} />);
    wrapper.find("button").simulate("click", {
      preventDefault: () => {}
    });
    expect(addNewPersonMock).toHaveBeenCalled();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<Form addNewPerson={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
