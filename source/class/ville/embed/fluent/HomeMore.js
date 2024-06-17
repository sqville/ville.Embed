/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HomeMore",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 2.38a1.5 1.5 0 0 1 2 0l5.5 4.95c.32.28.5.69.5 1.11v7.06c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5V8.44c0-.42.18-.83.5-1.11L9 2.38Zm1.33.75a.5.5 0 0 0-.66 0l-5.5 4.94a.5.5 0 0 0-.17.37v7.06c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V8.44a.5.5 0 0 0-.17-.37l-5.5-4.94Z",
    FILLED : "M11 2.38a1.5 1.5 0 0 0-2 0L3.5 7.33c-.32.28-.5.69-.5 1.11v7.06c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8.44c0-.42-.18-.83-.5-1.11L11 2.38ZM7 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-5 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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