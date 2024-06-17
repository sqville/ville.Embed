/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle5",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm5.3-3.55A.5.5 0 0 1 8.8 6H12a.5.5 0 1 1 0 1H9.25l-.2 1.74h.25c.42 0 .95 0 1.22.04a2.87 2.87 0 1 1-2.97 4.13.5.5 0 0 1 .9-.45 1.87 1.87 0 1 0 1.94-2.7 10.51 10.51 0 0 0-1.64-.02h-.17l-.05.01h-.02a.5.5 0 0 1-.5-.55l.3-2.75Z",
    FILLED : "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.8-4a.5.5 0 0 0-.5.45L8 9.2a.5.5 0 0 0 .51.55h.07a37.82 37.82 0 0 1 1.8.02 1.87 1.87 0 1 1-1.93 2.7.5.5 0 1 0-.9.44 2.87 2.87 0 1 0 2.98-4.13 10.91 10.91 0 0 0-1.47-.04L9.25 7H12a.5.5 0 1 0 0-1H8.8Z"
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