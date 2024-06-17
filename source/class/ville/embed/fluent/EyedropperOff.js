/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EyedropperOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.8 8.5 2.14 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-5.65-5.64-4.35 4.35a1.5 1.5 0 0 1-1.06.44H5.6l-2.25.98a1 1 0 0 1-1.32-1.3L3 14.41v-.5c0-.4.16-.78.44-1.07L7.79 8.5Zm3 3L8.5 9.2l-4.35 4.36a.5.5 0 0 0-.15.35v.6a.5.5 0 0 1-.04.2l-1 2.36 2.34-1.03a.5.5 0 0 1 .2-.04h.59a.5.5 0 0 0 .35-.15l4.35-4.35Zm2-2-.6.59.72.7.58-.58.35.35a1.5 1.5 0 0 0 2.13 0l.58-.58a1.5 1.5 0 0 0 0-2.13l-.35-.35 1.04-1.04a2.62 2.62 0 1 0-3.71-3.7L12.5 3.78l-.35-.35a1.5 1.5 0 0 0-2.12 0l-.59.59a1.5 1.5 0 0 0 0 2.12l.35.35-.58.59.7.7.6-.58 2.28 2.3Zm1.45-6.04a1.62 1.62 0 1 1 2.29 2.3l-1.4 1.39a.5.5 0 0 0 0 .7l.71.71c.2.2.2.51 0 .7l-.58.6a.5.5 0 0 1-.7 0l-4.42-4.42a.5.5 0 0 1 0-.7l.59-.59c.2-.2.5-.2.7 0l.7.7a.5.5 0 0 0 .71 0l1.4-1.39Z",
    FILLED : "M7.8 8.5 2.14 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-5.65-5.64-4.35 4.35a1.5 1.5 0 0 1-1.06.44H5.6l-2.25.98a1 1 0 0 1-1.32-1.3L3 14.41v-.5c0-.4.16-.78.44-1.07L7.79 8.5Zm3 3L8.5 9.2l-4.35 4.36a.5.5 0 0 0-.15.35v.6a.5.5 0 0 1-.04.2l-1 2.36 2.34-1.03a.5.5 0 0 1 .2-.04h.59a.5.5 0 0 0 .35-.15l4.35-4.35Zm2-2-.6.59.72.7.58-.58.35.35a1.5 1.5 0 0 0 2.13 0l.58-.58a1.5 1.5 0 0 0 0-2.13l-.35-.35 1.04-1.04a2.62 2.62 0 1 0-3.71-3.7L12.5 3.78l-.35-.35a1.5 1.5 0 0 0-2.12 0l-.59.59a1.5 1.5 0 0 0 0 2.12l.35.35-.58.59.7.7.6-.58 2.28 2.3Z"
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