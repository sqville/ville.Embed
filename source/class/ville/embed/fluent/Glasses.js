/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Glasses",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.19 4a2 2 0 0 0-1.52.7l-3.3 3.82c-.23.27-.37.6-.37.98v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h2v1.5a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-3c0-.43-.18-.82-.47-1.09l-3.2-3.72A2 2 0 0 0 12.8 4H12a.5.5 0 1 0 0 1h.81a1 1 0 0 1 .76.35L15.86 8H12.5c-.83 0-1.5.67-1.5 1.5v.5H9v-.5C9 8.67 8.33 8 7.5 8H4.14l2.29-2.65A1 1 0 0 1 7.19 5H8a.5.5 0 1 0 0-1h-.81ZM8 9.5v3c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 3 12.5v-3c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5Zm4 3v-3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 .32.11l.05.07c.08.08.13.2.13.32v3c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5Z",
    FILLED : "M7.19 4a2 2 0 0 0-1.52.7L2.37 8.5A1.5 1.5 0 0 0 2 9.5v3A2.5 2.5 0 0 0 4.5 15h2A2.5 2.5 0 0 0 9 12.5V11h2v1.5a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-3c0-.43-.18-.82-.47-1.09l-3.2-3.72A2 2 0 0 0 12.8 4H12a.5.5 0 1 0 0 1h.81a1 1 0 0 1 .76.35L15.86 8H12.5c-.83 0-1.5.67-1.5 1.5v.5H9v-.5C9 8.67 8.33 8 7.5 8H4.14l2.29-2.65A1 1 0 0 1 7.19 5H8a.5.5 0 0 0 0-1h-.81Z"
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