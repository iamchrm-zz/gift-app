import React from "react";
import { shallow } from "enzyme";
import { GiftItem } from "../../components/GiftItem";

describe("Pruebas en GifGridItem", () => {
  const id = "1";
  const title = "title";
  const url = "http://";
  const clase = "drop-shadow-xl";
  const wrapper = shallow(<GiftItem id={id} title={title} url={url} />);
  test("Debe mostrar el component correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener una clase", () => {
    const div = wrapper.find("div");

    expect(div.prop("className")).toBe(clase);
  });
});
