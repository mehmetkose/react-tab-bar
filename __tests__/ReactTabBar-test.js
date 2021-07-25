
import React from 'react';
import renderer from "react-test-renderer";
import ReactTabBar from '../src/ReactTabBar'

test('Props is displayed', () => {
  const component = renderer.create(
    <ReactTabBar title="Hello" />
  );
  const instance = component.root;
  expect(
    instance.findByProps({ className: "title" }).children
  ).toEqual(
    ["Hello"]
  );
});
