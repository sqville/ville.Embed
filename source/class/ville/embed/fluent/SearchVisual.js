/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SearchVisual",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14 3a3 3 0 0 1 3 3v1.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-2-2h-1.5a.5.5 0 0 1 0-1H14ZM6 3a3 3 0 0 0-3 3v1.5a.5.5 0 0 0 1 0V6c0-1.1.9-2 2-2h1.5a.5.5 0 0 0 0-1H6Zm8 14a3 3 0 0 0 3-3v-1.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-1.5a.5.5 0 0 0 0 1H14ZM3 14a3 3 0 0 0 3 3h1.5a.5.5 0 0 0 0-1H6a2 2 0 0 1-2-2v-1.5a.5.5 0 0 0-1 0V14Zm7-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6.5 7.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    FILLED : "M3 6.25C3 4.45 4.46 3 6.25 3h1a.75.75 0 0 1 0 1.5h-1c-.97 0-1.75.78-1.75 1.75v1a.75.75 0 0 1-1.5 0v-1Zm14 7.5c0 1.8-1.46 3.25-3.25 3.25h-1a.75.75 0 0 1 0-1.5h1c.97 0 1.75-.78 1.75-1.75v-1a.75.75 0 0 1 1.5 0v1Zm0-7.5C17 4.45 15.54 3 13.75 3h-1a.75.75 0 0 0 0 1.5h1c.97 0 1.75.78 1.75 1.75v1a.75.75 0 0 0 1.5 0v-1ZM6.25 17A3.25 3.25 0 0 1 3 13.75v-1a.75.75 0 0 1 1.5 0v1c0 .97.78 1.75 1.75 1.75h1a.75.75 0 0 1 0 1.5h-1ZM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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