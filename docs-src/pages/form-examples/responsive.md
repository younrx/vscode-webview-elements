---
layout: page.njk
title: Responsive form
tags: forms
weight: 1
---

# Responsive form

 <component-preview>
  <vscode-form-container responsive id="responsive-form">
    <vscode-form-group vertical>
      <vscode-label for="inputbox-01" side-aligned="end">
        Lorem <span class="normal">ipsum</span>:
      </vscode-label>
      <vscode-inputbox id="inputbox-01" name="input-1" placeholder="Placeholder example"></vscode-inputbox>
      <vscode-form-helper>
        <p>Lorem ipsum <code>let dolor = sit amet</code>, consectetur adipiscing elit. <span class="error">Suspendisse</span> faucibus imperdiet sapien, a gravida <a href="#">dolor</a>.</p>
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
        </ul>
      </vscode-form-helper>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-label for="inputbox-02" side-aligned="end">
        Dolor sit:
      </vscode-label>
      <vscode-inputbox id="inputbox-02" multiline name="input-2"></vscode-inputbox>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-label for="select-01" side-aligned="end">
        <span class="lightened">Duis eget</span> erat accumsan:
      </vscode-label>
      <vscode-single-select id="select-01" name="select-1">
        <vscode-option>Lorem</vscode-option>
        <vscode-option>Ipsum</vscode-option>
        <vscode-option>Dolor</vscode-option>
      </vscode-single-select>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-label for="select-02" side-aligned="end">
        <span class="lightened">Duis eget</span> erat accumsan:
      </vscode-label>
      <vscode-multi-select id="select-02" name="select-2">
        <vscode-option>Lorem</vscode-option>
        <vscode-option>Ipsum</vscode-option>
        <vscode-option>Dolor</vscode-option>
      </vscode-multi-select>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-label for="checkbox-01" side-aligned="end">
        Phasellus quam arcu:
      </vscode-label>
      <vscode-checkbox-group>
        <vscode-checkbox id="checkbox-01" name="checkbox-group-1" value="lorem" label="Lorem ipsum"></vscode-checkbox>
        <vscode-checkbox id="checkbox-02" name="checkbox-group-1" value="ipsum" label="Donec mi risus"></vscode-checkbox>
        <vscode-checkbox id="checkbox-03" name="checkbox-group-1" value="dolor">Duis <a href="#">ullamcorper</a></vscode-checkbox>
      </vscode-checkbox-group>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-label for="checkbox-04" side-aligned="end">
        Phasellus quam arcu:
      </vscode-label>
      <vscode-checkbox-group vertical>
        <vscode-checkbox id="checkbox-04" name="checkbox-group-2" value="sit">Lorem ipsum</vscode-checkbox>
        <vscode-checkbox id="checkbox-05" name="checkbox-group-2" value="et">Donec mi risus</vscode-checkbox>
        <vscode-checkbox id="checkbox-06" name="checkbox-group-2" value="amur">Nullam tincidunt eros sit amet sollicitudin pharetra. Ut quis rutrum enim, non finibus odio. Morbi tempus lacus neque, eget rutrum sapien porttitor vitae. Vivamus placerat nisl eu turpis tristique, eu consectetur libero finibus. Duis vitae orci at risus ultrices gravida. Ut vitae nulla velit. Mauris sed enim eleifend, euismod tortor vitae, vehicula odio.</vscode-checkbox>
      </vscode-checkbox-group>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-label for="radio-01" side-aligned="end">
        Phasellus quam arcu:
      </vscode-label>
      <vscode-radio-group>
        <vscode-radio id="radio-01" name="radio-group-1" value="lorem">Lorem ipsum</vscode-radio>
        <vscode-radio id="radio-02" name="radio-group-1" value="ipsum">Donec mi risus</vscode-radio>
        <vscode-radio id="radio-03" name="radio-group-1" value="dolor">Duis <a href="#">ullamcorper</a></vscode-radio>
      </vscode-radio-group>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-label for="radio-04" side-aligned="end">
        Phasellus quam arcu:
      </vscode-label>
      <vscode-radio-group vertical>
        <vscode-radio id="radio-04" name="radio-group-2" value="sit">Lorem ipsum</vscode-radio>
        <vscode-radio id="radio-05" name="radio-group-2" value="et">Donec mi risus</vscode-radio>
        <vscode-radio id="radio-06" name="radio-group-2" value="amur">Duis ullamcorper</vscode-radio>
      </vscode-radio-group>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-button id="save-button">Save</vscode-button>
      <vscode-button secondary>Cancel</vscode-button>
    </vscode-form-group>
  </vscode-form-container>
</component-preview>