/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DatabaseMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.9 1.78C6.88 2.24 6 2.99 6 4v3.01a9.16 9.16 0 0 1 1 0V5.7c.27.2.58.38.9.52 1.08.5 2.53.78 4.1.78 1.57 0 3.02-.29 4.1-.78.32-.14.63-.32.9-.52V14c0 .37-.36.88-1.32 1.31-.91.42-2.22.69-3.68.69v.5c0 .17-.02.34-.05.5H12c1.57 0 3.02-.29 4.1-.78 1.02-.46 1.9-1.21 1.9-2.22V4c0-1-.88-1.76-1.9-2.22A10.17 10.17 0 0 0 12 1c-1.57 0-3.02.29-4.1.78Zm.42 3.53C7.36 4.88 7 4.37 7 4c0-.37.36-.88 1.32-1.31A9.19 9.19 0 0 1 12 2c1.46 0 2.77.27 3.68.69.96.43 1.32.94 1.32 1.31 0 .37-.36.88-1.32 1.31-.91.42-2.22.69-3.68.69a9.19 9.19 0 0 1-3.68-.69ZM7 8.01a7.68 7.68 0 0 1 2 .41c1.2.45 2 1.21 2 2.08 0 1.38-2.01 2.5-4.5 2.5S2 11.88 2 10.5c0-1.29 1.75-2.35 4-2.48a8.16 8.16 0 0 1 1 0Zm3.93 8.94C10.54 18.12 8.7 19 6.5 19 4.01 19 2 17.88 2 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85s2.68-.3 3.67-.86c.29-.16.58-.36.83-.59v3.95c0 .15-.03.3-.07.45Z",
    FILLED : "M18 4c0 1.66-2.69 3-6 3S6 5.66 6 4s2.69-3 6-3 6 1.34 6 3Zm0 2.12c-.38.36-.84.66-1.31.9-1.25.62-2.91.98-4.69.98-.62 0-1.23-.04-1.81-.13.93.53 1.72 1.34 1.8 2.44H12v6.19c0 .17-.02.34-.05.5H12c3.31 0 6-1.34 6-3V6.12Zm-10.69.9.05.02A9.08 9.08 0 0 0 6 7.01v-.89c.38.36.84.66 1.31.9ZM9 8.42A7.86 7.86 0 0 0 6.5 8C4.01 8 2 9.12 2 10.5S4.01 13 6.5 13s4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08Zm1.17 4.72c-1 .55-2.29.86-3.67.86s-2.68-.3-3.67-.86c-.29-.16-.58-.36-.83-.59v3.95C2 17.88 4.01 19 6.5 19s4.5-1.12 4.5-2.5v-3.95c-.25.23-.54.43-.83.6Z"
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