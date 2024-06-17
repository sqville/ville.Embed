/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudError",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.65 6.25C14.4 3.92 12.82 2 10 2 7.18 2 5.59 3.9 5.35 6.25H5.1A3.34 3.34 0 0 0 2 9.62 3.33 3.33 0 0 0 5.28 13h2.5c.02-.34.08-.68.17-1H5.28A2.33 2.33 0 0 1 3 9.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9C6.55 4.32 7.89 3 10 3c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 1 .9h.07c1 0 1.84.66 2.15 1.6.42.3.8.65 1.12 1.06l.01-.29a3.33 3.33 0 0 0-3.28-3.37h-.07ZM18 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z",
    FILLED : "M14.65 6.25C14.4 3.92 12.82 2 10 2 7.18 2 5.59 3.9 5.35 6.25h-.07A3.33 3.33 0 0 0 2 9.62 3.33 3.33 0 0 0 5.28 13h2.5a5.75 5.75 0 0 1 10.2-3.1c.02-.09.02-.18.02-.28a3.33 3.33 0 0 0-3.28-3.37h-.07ZM18 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM13.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z"
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