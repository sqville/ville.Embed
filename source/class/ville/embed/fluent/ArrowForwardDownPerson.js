/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowForwardDownPerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.61 4.32 16.3 7h-4.55C8.8 6.9 7 5.27 7 3a.5.5 0 0 0-1 0v.2C6.11 6.03 8.48 8 12 8h4.3l-2.69 2.68-.06.07a.5.5 0 0 0 .77.64l3.55-3.55.05-.07.04-.08.02-.06.02-.09v-.06.02a.5.5 0 0 0-.01-.1v-.03l-.03-.06-.03-.06-.05-.07-3.56-3.57-.07-.06a.5.5 0 0 0-.64.77ZM7.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 15.5C9 16.74 8 18 5.5 18S2 16.75 2 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "M13.43 4.74 15.7 7h-3.95c-2.8-.1-4.49-1.62-4.49-3.75a.75.75 0 0 0-1.5 0v.21C5.87 6.42 8.35 8.5 12 8.5h3.69l-2.26 2.26-.07.08a.75.75 0 0 0 1.13.98l3.54-3.54a.75.75 0 0 0 .09-.1l.03-.06.05-.1.03-.1.02-.1V7.68l-.01-.06-.02-.07-.03-.09-.05-.1-.04-.05-.07-.08-3.54-3.54-.08-.07a.75.75 0 0 0-.98 1.13ZM7.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 15.5C9 16.74 8 18 5.5 18S2 16.75 2 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});