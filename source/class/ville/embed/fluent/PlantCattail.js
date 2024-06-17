/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlantCattail",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a2 2 0 0 0-2 2v4a2 2 0 0 0 1.5 1.94v2.35L6.35 9.15a.5.5 0 1 0-.7.7l3.85 3.86v.79a.5.5 0 0 0 1 0v-.8l3.85-3.85a.5.5 0 0 0-.7-.7l-3.15 3.14V9.94A2 2 0 0 0 12 8V4a2 2 0 0 0-2-2ZM9 4a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V4Zm-3.78 8.77c.45-.18.95-.32 1.49-.44l.86.86c-.76.12-1.43.3-1.99.5-.55.22-.97.46-1.23.7-.27.25-.35.45-.35.61 0 .16.08.36.35.6.26.25.68.49 1.23.7 1.1.43 2.67.7 4.42.7s3.31-.27 4.42-.7c.55-.21.97-.45 1.23-.7.27-.24.35-.44.35-.6 0-.16-.08-.36-.35-.6a3.99 3.99 0 0 0-1.23-.7c-.56-.22-1.23-.4-1.99-.51l.86-.86c.54.12 1.04.26 1.49.44.62.23 1.15.53 1.55.89.39.35.67.8.67 1.34 0 .53-.28.99-.67 1.34-.4.36-.93.66-1.55.9-1.25.47-2.94.76-4.78.76-1.84 0-3.53-.29-4.78-.77a4.96 4.96 0 0 1-1.55-.89C3.28 16 3 15.54 3 15c0-.53.28-.99.67-1.34.4-.36.93-.66 1.55-.9Z",
    FILLED : "M8 4a2 2 0 1 1 4 0v4a2 2 0 0 1-1.5 1.94v2.35l3.15-3.14a.5.5 0 0 1 .7.7l-3.85 3.86v.79a.5.5 0 0 1-1 0v-.8L5.65 9.86a.5.5 0 1 1 .7-.7l3.15 3.14V9.94A2 2 0 0 1 8 8V4Zm-1.29 8.33c-.54.12-1.04.26-1.49.44-.62.23-1.15.53-1.55.89C3.28 14 3 14.46 3 15c0 .53.28.99.67 1.34.4.36.93.66 1.55.9 1.25.47 2.94.76 4.78.76 1.84 0 3.53-.29 4.78-.77a4.96 4.96 0 0 0 1.55-.89c.39-.35.67-.8.67-1.34 0-.53-.28-.99-.67-1.34-.4-.36-.93-.66-1.55-.9-.45-.17-.95-.31-1.49-.43l-.86.86c.76.12 1.43.3 1.99.5.55.22.97.46 1.23.7.27.25.35.45.35.61 0 .16-.08.36-.35.6-.26.25-.68.49-1.23.7-1.1.43-2.67.7-4.42.7s-3.31-.27-4.42-.7a3.99 3.99 0 0 1-1.23-.7c-.27-.24-.35-.44-.35-.6 0-.16.08-.36.35-.6.26-.25.68-.49 1.23-.7.56-.22 1.23-.4 1.99-.51l-.86-.86Z"
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