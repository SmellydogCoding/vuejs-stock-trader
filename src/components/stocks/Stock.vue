<template lang="pug">
  div.col-sm-6.col-md-4
    div.panel.panel-success
      div.panel-heading
        h3.panel-title Name
          small (Price: Price)
      div.panel-body
        div.pull-left
          input.form-control(type="number" placeholder="Quantity")
        div.pull-right
          button.btn.btn-success Buy
</template>
