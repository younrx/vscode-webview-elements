import {css} from 'lit';
import declareThemeVariables from '../declareThemeVariables';

const DEFAULT_FONT_SIZE = 13;
const DEFAULT_LINE_HEIGHT = 18;

export default [
  declareThemeVariables([
    {
      componentProp: '--active-background',
      vscodeProp: '--vscode-quickInputList-focusBackground',
    },
    {
      componentProp: '--active-foreground',
      vscodeProp: '--vscode-quickInputList-focusForeground',
    },
    {
      componentProp: '--active-outline',
      vscodeProp: '--vscode-list-focusOutline',
    },
    {
      componentProp: '--background',
      vscodeProp: '--vscode-settings-textInputBackground',
    },
    {
      componentProp: '--badge-background',
      vscodeProp: '--vscode-badge-background',
    },
    {
      componentProp: '--badge-foreground',
      vscodeProp: '--vscode-badge-foreground',
    },
    {
      componentProp: '--border',
      vscodeProp: '--vscode-settings-dropdownBorder',
    },
    {
      componentProp: '--focus-border',
      vscodeProp: '--vscode-focusBorder',
    },
    {
      componentProp: '--foreground',
      vscodeProp: '--vscode-foreground',
    },
    {
      componentProp: '--font-family',
      vscodeProp: '--vscode-font-family',
    },
    {
      componentProp: '--font-size',
      vscodeProp: '--vscode-font-size',
    },
    {
      componentProp: '--font-weight',
      vscodeProp: '--vscode-font-weight',
    },
    {
      componentProp: '--selected-background',
      vscodeProp: '--vscode-list-hoverBackground',
    },
    {
      componentProp: '--input-background',
      vscodeProp: '--vscode-settings-textInputBackground',
    },
    {
      componentProp: '--list-hover-background',
      vscodeProp: '--vscode-list-hoverBackground',
    },
  ]),
  css`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground);
      border-color: var(--vscode-settings-dropdownBorder);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground);
      font-family: var(--font-family);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
      line-height: ${DEFAULT_LINE_HEIGHT / DEFAULT_FONT_SIZE};
      position: relative;
      user-select: none;
      width: 100%;
    }

    .select-face {
      cursor: pointer;
      padding: 3px 4px;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--badge-background);
      border-radius: 2px;
      color: var(--badge-foreground);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    .empty-label-placeholder {
      display: block;
      height: 16px;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--focus-border);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--foreground);
      display: block;
      font-family: var(--font-family);
      font-size: var(--font-size);
      line-height: 1.3;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      background-color: transparent;
      border: 0;
      color: var(--foreground);
      cursor: pointer;
      flex-shrink: 0;
      height: 24px;
      margin: 0;
      padding: 0;
      width: 30px;
    }

    .combobox-button:focus,
    .combobox-button:hover {
      background-color: var(--vscode-list-hoverBackground);
    }

    .combobox-button:focus {
      outline: 0;
    }

    .icon {
      color: var(--vscode-foreground);
      display: block;
      height: 14px;
      pointer-events: none;
      position: absolute;
      right: 8px;
      top: 5px;
      width: 14px;
    }

    .icon svg {
      height: 100%;
      width: 100%;
    }

    .select-face:empty:before {
      content: '\\00a0';
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground);
      border-color: var(--vscode-settings-dropdownListBorder);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder);
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      max-height: 194px;
      overflow: auto;
      padding: 2px;
    }

    .option {
      align-items: center;
      color: var(--vscode-foreground);
      cursor: pointer;
      display: flex;
      font-size: var(--vscode-font-size);
      line-height: 17px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active {
      background-color: var(--vscode-quickInputList-focusBackground);
      color: var(--vscode-quickInputList-focusForeground);
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-quickInputList-focusBackground);
      color: var(--vscode-quickInputList-focusForeground);
    }

    .checkbox-icon {
      background-color: var(--vscode-settings-checkboxBackground);
      border: 1px solid currentColor;
      border-radius: 2px;
      box-sizing: border-box;
      height: 14px;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 14px;
    }

    .checkbox-icon.checked:before,
    .checkbox-icon.checked:after {
      content: '';
      display: block;
      height: 5px;
      position: absolute;
      transform: rotate(-45deg);
      width: 10px;
    }

    .checkbox-icon.checked:before {
      background-color: var(--foreground);
      left: 1px;
      top: 2.5px;
    }

    .checkbox-icon.checked:after {
      background-color: var(--vscode-settings-checkboxBackground);
      left: 1px;
      top: -0.5px;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--foreground);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--focus-border);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--border);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--foreground);
      font-family: var(--font-family);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
      line-height: 1.3;
      padding: 6px 4px;
    }
  `,
];
