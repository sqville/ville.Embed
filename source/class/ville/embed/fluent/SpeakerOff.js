/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SpeakerOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L5.29 6H3.5C2.68 6 2 6.67 2 7.5v5c0 .83.68 1.5 1.5 1.5H6.1a.5.5 0 0 1 .34.13l3.88 3.6a1 1 0 0 0 1.68-.74V12.7l5.15 5.15a.5.5 0 0 0 .7-.7l-2.56-2.57L2.85 2.15ZM11 11.7V17l-3.88-3.6A1.5 1.5 0 0 0 6.1 13H3.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5h2.6l.18-.01L11 11.7ZM11 3v5.88l1 1V3a1 1 0 0 0-1.68-.74L7.24 5.12l.71.71L11 3.01Zm3.06 8.94.74.74a5.5 5.5 0 0 0-.04-5.43.5.5 0 1 0-.86.5 4.5 4.5 0 0 1 .16 4.19Zm1.84 1.84.72.72a8 8 0 0 0-.66-9.83.5.5 0 1 0-.74.66 7 7 0 0 1 .68 8.45Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L5.29 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 0 1 .35.13l3.87 3.6a1 1 0 0 0 1.68-.74v-4.28l5.15 5.14a.5.5 0 0 0 .7-.7l-2.56-2.57L2.85 2.15Zm13.11 2.52a8 8 0 0 1 .66 9.83l-.73-.73a7 7 0 0 0-.68-8.44.5.5 0 1 1 .75-.66Zm-1.2 2.58c1 1.74.95 3.8.04 5.43l-.74-.74a4.5 4.5 0 0 0-.17-4.19.5.5 0 1 1 .87-.5ZM12 3.01v6.87L7.25 5.13l3.07-2.86a1 1 0 0 1 1.68.74Z"
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