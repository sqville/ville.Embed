/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CropInterimOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m3.02 3.73-.87-.88a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-1.2-1.2A5.47 5.47 0 0 1 9 15.78v.72a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.85a4.49 4.49 0 0 0 5.56.92l-1.94-1.94L13 14a2 2 0 0 1-1.73-1H5.73a2 2 0 1 1-1.96-2.99l.47-4.16a2 2 0 0 1-1.22-2.12Zm8 8L5.27 5.98a2 2 0 0 1-.04 0l-.47 4.17A2 2 0 0 1 6 12h5c0-.1 0-.18.02-.27Zm.75-5.74.46 4.12 2.63 2.63A2 2 0 0 0 13.23 10l-.47-4.16A2 2 0 1 0 10.26 3H6.74a2 2 0 0 0-2.47-.86l.87.87a1 1 0 0 1 .86.86l.87.87A2 2 0 0 0 7 4h3a2 2 0 0 0 1.77 1.99Zm4.92 8.58.72.72a5.5 5.5 0 0 0-3.56-8.72l.12 1.03a4.5 4.5 0 0 1 2.72 6.97ZM12 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-9 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    FILLED : "m3.02 3.73-.87-.88a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-1.2-1.2A5.47 5.47 0 0 1 9 15.78v.72a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.85a4.49 4.49 0 0 0 5.56.92l-1.94-1.94L13 14a2 2 0 0 1-1.73-1H5.73a2 2 0 1 1-1.96-2.99l.47-4.16a2 2 0 0 1-1.22-2.12Zm8 8L5.27 5.98h-.04l-.47 4.17A2 2 0 0 1 6 12h5c0-.1 0-.18.02-.27Zm.75-5.74.46 4.12 2.63 2.63A2 2 0 0 0 13.23 10l-.47-4.16A2 2 0 1 0 10.26 3H6.74a2 2 0 0 0-2.47-.86l2.6 2.6A2 2 0 0 0 7 4h3a2 2 0 0 0 1.77 1.99Zm4.92 8.58.72.72a5.5 5.5 0 0 0-3.56-8.72l.12 1.03a4.5 4.5 0 0 1 2.72 6.97Z"
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