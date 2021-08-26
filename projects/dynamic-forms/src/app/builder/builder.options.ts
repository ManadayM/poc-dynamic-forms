/**
 * Form.IO - Form Builder Options to change its default behavior.
 * @see https://docs.form.io/developers/form-builder#form-builder-options
 */

export const builderOptions = {

  noDefaultSubmitButton: true,

  builder: {
    basic: false,
    premium: false,
    data: false,

    // TODO: The "customBasic" section can be removed
    // if the customised submit button ("submitButton") is not required in the side panel.

    customBasic: {
      title: 'Basic',
      default: true,
      weight: 0,
      components: {
        textfield: true,
        textarea: true,
        number: true,
        password: true,
        checkbox: true,
        selectboxes: true,
        select: true,
        radio: true,
        button: true,

        // TODO:
        // Uncomment following to add a "Submit Button" that emits a customEvent instead submits the form.
        // This is kept commented considering that we'll be continue using "Default" form schema that includes
        // this submit button out-of-the-box.

        // submitButton: {
        //   title: 'Submit Button',
        //   key: 'submit',
        //   icon: 'stop',
        //   schema: {
        //     "label": "Submit",
        //     "action": "event",
        //     "showValidations": true,
        //     "disableOnInvalid": true,
        //     "tableView": false,
        //     "key": "submit",
        //     "type": "button",
        //     "input": true
        //   }
        // }
      }
    }
  }
}
