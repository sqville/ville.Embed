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
qx.Mixin.define("ville.embed.MAtom",
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
    },

    /** Control the text alignment */
    embed :
    {
      check : "Object",
      nullable : true,
      themeable : true,
      apply : "_applyEmbed"
    },

    embedProps :
    {
      check : "Map",
      nullable : true,
      themeable : true,
      apply : "_applyEmbedProps"
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
    _applyIconProps (value, old) 
    {
      this.getChildControl("icon").set(value);
    },

    // property apply
    _applyEmbedProps (value, old) 
    {
      this.getEmbed().set(value);
    },

    // property apply
    _applyEmbed (value, old) 
    {
      value.setAnonymous(true);
      this._addAt(value, 0);
      if (this.getShow() === "label") {
        value.exclude();
      }
    }
  }
});
