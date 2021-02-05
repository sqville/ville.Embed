/* ************************************************************************

   Ville Software

   http://sqville.com

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */


/**
 * A mixin that enables the font property, and thus, font handling abilities to the Image object
 * This mixin is needed to enable font icons to show up using the Font object
 */
qx.Mixin.define("ville.embed.MAtomPatch",
{
  
  
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
 
  properties :
  {
  	/** Control the text alignment */
    iconProps :
    {
      check : "Map",
      nullable : true,
      themeable : true,
      apply : "_applyIconProps"
    }
  	
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
  	
  	// property apply
    _applyIconProps : function(value, old) {
      this.getChildControl("icon").set(value);
    },

     // overridden
     _createChildControlImpl : function(id, hash)
     {
       var control;
 
       switch(id)
       {
         case "label":
           control = new qx.ui.basic.Label(this.getLabel());
           control.setAnonymous(true);
           control.setRich(this.getRich());
           control.setSelectable(this.getSelectable());
           this._add(control);
           if (this.getLabel() == null || this.getShow() === "icon") {
             control.exclude();
           }
           break;
 
         case "icon":
          var source = this.getIcon();          
          if (qx.lang.String.startsWith(source, "data:text/html;") || qx.lang.String.startsWith(source, "data:text/svg+xml;") || qx.lang.String.startsWith(source, "data:text/json;")) {
            control = new ville.embed.Embed(source);
          } else {
            control = new qx.ui.basic.Image(this.getIcon());
           }
           control.setAnonymous(true);
           this._addAt(control, 0);
           if (this.getIcon() == null || this.getShow() === "label") {
             control.exclude();
           }
           break;
       }
 
       return control || this.base(arguments, id);
     }
  }
});