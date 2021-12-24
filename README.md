# stimulus-tabs

A stimulus controller for simple tabbed content.

## Usage

### In your view

```
<div data-controller="tabs">
  <ul>
    <li data-tabs-target="tab" data-action="click->tabs#switch" class="active">Tab 1</li>
    <li data-tabs-target="tab" data-action="click->tabs#switch">Tab 2</li>
  </ul>
  <div data-tabs-target="tabContent">
    This is the content for Tab 1
  </div>
  <div data-tabs-target="tabContent">
    This is the content for Tab 2
  </div>
</div>
```

...and you'll have functional tabs! Then it's just up to you to add your own CSS 🌸

## Contributions

Bug fixes and pull requests very welcome ✌️

