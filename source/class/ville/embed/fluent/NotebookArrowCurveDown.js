/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NotebookArrowCurveDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.9-.9.9V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 0 0-.7.71l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.7Zm-4.4 4c.31.16.65.3 1 .4V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2.6a5.5 5.5 0 0 0-.66-1H13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5.6ZM16 6h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Z",
    FILLED : "M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.9-.9.9V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.75v1.54l-.9-.9a.5.5 0 0 0-.7.71l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.7Zm3.6-.9a5.5 5.5 0 0 1-8 4.9V16c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.74A5.48 5.48 0 0 1 11 5.5Zm5 .5h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Z"
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