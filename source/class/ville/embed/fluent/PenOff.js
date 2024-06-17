/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PenOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l5.4 5.4-4 4c-.33.32-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.88c.47-.1.9-.33 1.24-.67l3.98-3.98 5.4 5.4a.5.5 0 0 0 .7-.71l-15-15Zm8.2 9.6-3.99 3.98c-.2.2-.46.35-.74.4l-3.16.71.7-3.18c.07-.27.2-.51.4-.7l3.99-4 2.8 2.79Zm5.37-5.38-3.96 3.97.7.7 2.59-2.58.34.33a1 1 0 0 1 0 1.42l-.94.94a.5.5 0 1 0 .7.7l.94-.94a2 2 0 0 0 0-2.82l-.33-.34.67-.67a2.97 2.97 0 0 0-4.21-4.2L8.96 6.83l.7.7 3.97-3.96a1.97 1.97 0 0 1 2.79 2.8Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l5.4 5.4-4 4c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68l3.98-3.98 5.4 5.4a.5.5 0 0 0 .7-.71l-15-15Zm12.9 6.3-2.59 2.6-4.2-4.21 3.96-3.97a2.97 2.97 0 0 1 4.2 4.21l-.66.67.33.34a2 2 0 0 1 0 2.82l-.94.94a.5.5 0 0 1-.7-.7l.94-.94a1 1 0 0 0 0-1.42l-.34-.33Z"
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