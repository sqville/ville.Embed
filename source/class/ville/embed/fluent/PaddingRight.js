/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaddingRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.85 9.85a.5.5 0 0 0 0-.7l-4.5-4.5a.5.5 0 0 0-.7.7L14.29 9H4.5a.5.5 0 0 0 0 1h9.8l-3.65 3.65a.5.5 0 0 0 .7.7l4.5-4.5ZM3 3.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12Zm15 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm0 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm0 4a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm0 4a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z",
    FILLED : "M2.75 3.75c.41 0 .75.34.75.75V15A.75.75 0 0 1 2 15V4.5c0-.41.34-.75.75-.75Zm14.5 0c.41 0 .75.34.75.75v1.31a.75.75 0 0 1-1.5 0V4.5c0-.41.34-.75.75-.75Zm0 3.94c.41 0 .75.33.75.75v2.62a.75.75 0 0 1-1.5 0V8.44c0-.42.34-.75.75-.75Zm0 5.25c.41 0 .75.33.75.75V15a.75.75 0 0 1-1.5 0v-1.31c0-.42.34-.75.75-.75Zm-1.97-2.66c.3-.3.3-.77 0-1.06l-4.25-4.25a.75.75 0 1 0-1.06 1.06L12.94 9H5.75a.75.75 0 0 0 0 1.5h7.19l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25Z"
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