"use client";

import { Select } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content className="mt-24 ml-4">
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Separator />
          <Select.Item value="1">Masih Shafiei</Select.Item>
          <Select.Item value="2">Masih Shafiei</Select.Item>
          <Select.Item value="3">Masih Shafiei</Select.Item>
          <Select.Item value="4">Masih Shafiei</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
