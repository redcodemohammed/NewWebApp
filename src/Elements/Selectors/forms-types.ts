import { PopupOptions } from "@/Libs/eze-spark";

export interface IListOption {
  label?: string;
  value?: any;
  className?: string;
  displayLabel?: string;
  to?: string;
  visible?: boolean;
  selected?: boolean;
}

export type ToggleListProps = { container: HTMLElement; show?: boolean };

export interface ISelectorBuilder {
  options: IListOption[];
  selected: IListOption;
  setOptions: (options: IListOption[]) => void;
  activeClassName?: string;
  toggleList: ({ container, show }: ToggleListProps) => Promise<void>;
}
export interface ISelectorListBuilder {
  options: IListOption[];
  selected: IListOption;
  setOptions: (options: IListOption[]) => void;
  activeClassName?: string;
  toggleList: ({ container, show }: ToggleListProps) => Promise<void>;
  noOptionsMessage?: string;
  onOptionChanged: (option: IListOption) => void;
}

interface ISelect<T = any> extends IKitProps<T> {
  options?: IListOption[];
  getOptions?: () => Promise<IListOption[]>;
  activeClassName?: string;
  label?: string;

  // service?: any;
  setValue?: (value: string) => void;
  noOptionsMessage?: string;
  toggleOnSelect?: boolean;
  listProps?: PopupOptions;
  listClassName?: string;
  listContainerClass?: string;
}

export interface ISelectorProps<T = any> extends ISelect<T> {
  builder?: React.FC<ISelectorBuilder>;
  listBuilder?: React.FC<ISelectorListBuilder>;
  optionsVisible?: boolean;
  emptyOption?: IListOption;
}
export interface IMultiSelectorProps<T = any> extends ISelect<T> {
  placeholder?: string;
  listBuilder?: React.FC<IMultiSelectorListBuilder>;
  builder?: React.FC<IMultiSelectorBuilder>;
  inputClass?: string;
}

// const DefaultBuilder = ({ selected, filter, toggleList, options, inputClass, inputValue, setInputValue, placeholder }: IMultiSelectorBuilder) => {
export interface IMultiSelectorBuilder {
  selected: IListOption[];
  options: IListOption[];
  setOptions: (options: IListOption[]) => void;
  toggleList: ({ container, show }: ToggleListProps) => Promise<void>;
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder?: string;
  inputClass?: string;
  select: (option: IListOption) => void;
  unSelect: (option: IListOption) => void;
  unSelectAll: () => void;
  selectAll: () => void;
}
export interface IMultiSelectorListBuilder {
  options: IListOption[];
  selected: IListOption[];
  toggleList: ({ container, show }: ToggleListProps) => Promise<void>;
  setOptions: (options: IListOption[]) => void;
  noOptionsMessage?: string;
  select: (option: IListOption) => void;
  unSelect: (option: IListOption) => void;
  unSelectAll: () => void;
  selectAll: () => void;
}

// kit props
import React from "react";

interface IChange {
  id: string;
  clear: (effect?: boolean) => void;
  value: any;
  label?: string;
  setValue?: (value: string) => void;
}
export interface IKitProps<T = any> {
  id?: string;
  style?: any;
  value?: T;
  onChange?: (props: IChange) => void;
}

export interface IClearIconProps {
  value: string;
  clear: (effect?: boolean) => void;
}

export interface IInputProps extends IKitProps {
  //extends React.InputHTMLAttributes<HTMLInputElement> {
  dely?: number;
  clearIcon?: React.FC<IClearIconProps> | null;
  placeholder?: string;
  containerClass?: string;
  onFocus?: (props: IChange) => void;
  [key: string]: any;
}
