/* ************************************************************************

   http://sqville.com

   Copyright:
     

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * 

************************************************************************ */

/**
 *
 */
qx.Class.define("wax.demo.MenuButton",
{
  extend : qx.ui.form.RadioButton,
  implement : qx.ui.form.IRadioItem,


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function(label, icon, scale, indicator)
  {
    this.base(arguments, label);

    if (icon !== undefined) {
      this.setIcon(icon);

      if (scale !== undefined) {
        this.getChildControl("icon").set({ scale : scale });
      }
    }

    if (indicator !== undefined) {
      var control = new qx.ui.basic.Label(indicator).set({alignX: "right", appearance : "mainmenuindicator"});
      this._add(new qx.ui.core.Spacer(30, 1));
      this._add(control);
    }
    
  },


  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {

    // overridden
    appearance :
    {
      refine : true,
      init : "mainmenubutton"
    },

    // overridden
    allowGrowX :
    {
      refine : true,
      init : true
    }

  }
});
