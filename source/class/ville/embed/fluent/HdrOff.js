/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HdrOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l1.41 1.42A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.54l1.86 1.85a.5.5 0 0 0 .7-.7l-15-15ZM14.3 15H4.75C3.78 15 3 14.22 3 13.25v-6.5c0-.83.57-1.52 1.34-1.7l2.72 2.72A.5.5 0 0 0 7 8v1.5H5V8a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-1.5h2V12a.5.5 0 0 0 1 0V8.7l1 1V12c0 .28.22.5.5.5h.25c.57 0 1.09-.21 1.48-.56L14.3 15ZM10 10.7l.52.53c-.15.12-.32.2-.52.24v-.76Zm-.38-3.2L12 9.88v-.13c0-1.24-1-2.25-2.25-2.25h-.13ZM13 10.88l1 1V10.5h.4l.63 1.68a.5.5 0 0 0 .94-.36l-.6-1.6a1.5 1.5 0 0 0-.87-2.72h-1a.5.5 0 0 0-.5.5v2.88Zm4 2.37c0 .45-.17.86-.45 1.18l.7.7c.47-.49.75-1.15.75-1.88v-6.5A2.75 2.75 0 0 0 15.25 4H6.12l1 1h8.13c.97 0 1.75.78 1.75 1.75v6.5ZM14 9.5v-1h.5a.5.5 0 0 1 0 1H14Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l1.41 1.42A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.54l1.86 1.85a.5.5 0 0 0 .7-.7l-15-15Zm8.38 9.8c-.4.34-.91.55-1.48.55H9.5A.5.5 0 0 1 9 12V9.7l1 1v.78c.2-.04.37-.13.52-.25l.71.71ZM8 8.7V12a.5.5 0 0 1-1 0v-1.5H5V12a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0v1.5h2V8a.5.5 0 0 1 .06-.23L8 8.7Zm4 1.04v.13l1 1V8c0-.28.22-.5.5-.5h1a1.5 1.5 0 0 1 .87 2.72l.6 1.6a.5.5 0 0 1-.94.36l-.63-1.68H14v1.38l3.25 3.25c.47-.49.75-1.15.75-1.88v-6.5A2.75 2.75 0 0 0 15.25 4H6.12l3.5 3.5h.13c1.24 0 2.25 1 2.25 2.25Zm2-.25h.5a.5.5 0 0 0 0-1H14v1Z"
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