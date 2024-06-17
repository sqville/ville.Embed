/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FolderGlobe",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h5.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 14.5V8h4.09c.4 0 .78-.16 1.06-.44L9.7 6h5.79c.83 0 1.5.67 1.5 1.5v2.1c.36.18.7.4 1 .66V7.5A2.5 2.5 0 0 0 15.5 5H9.7L8.23 3.51A1.75 1.75 0 0 0 6.98 3H4.5ZM3 5.5C3 4.67 3.67 4 4.5 4h2.48c.2 0 .4.08.53.22L8.8 5.5 7.44 6.85a.5.5 0 0 1-.35.15H3V5.5Zm10.55 5.65a8.9 8.9 0 0 0-.54 2.85h2.98a8.9 8.9 0 0 0-.54-2.85 2.93 2.93 0 0 0-.53-.91c-.19-.2-.33-.24-.42-.24-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91Zm-.72-.83A9.92 9.92 0 0 0 12 14h-1.98a4.5 4.5 0 0 1 2.8-3.68Zm3.34 0a9.92 9.92 0 0 1 .82 3.68h1.98a4.5 4.5 0 0 0-2.8-3.68Zm2.8 4.68H17a9.92 9.92 0 0 1-.82 3.68 4.5 4.5 0 0 0 2.8-3.68Zm-4.47 4c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85h-2.98a8.9 8.9 0 0 0 .54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24Zm-1.67-.32a4.5 4.5 0 0 1-2.8-3.68H12a9.92 9.92 0 0 0 .82 3.68Z",
    FILLED : "M2 5.5A2.5 2.5 0 0 1 4.5 3h2.48c.47 0 .91.18 1.24.51L9.5 4.8 7.44 6.85a.5.5 0 0 1-.35.15H2V5.5ZM2 8v6.5A2.5 2.5 0 0 0 4.5 17h5.1a5.5 5.5 0 0 1 8.4-6.74V7.5A2.5 2.5 0 0 0 15.5 5h-4.8L8.16 7.56A1.5 1.5 0 0 1 7.09 8H2Zm11.55 3.15a8.9 8.9 0 0 0-.54 2.85h2.98a8.9 8.9 0 0 0-.54-2.85 2.93 2.93 0 0 0-.53-.91c-.19-.2-.33-.24-.42-.24-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91Zm-.72-.83A9.92 9.92 0 0 0 12 14h-1.98a4.5 4.5 0 0 1 2.8-3.68Zm3.34 0a9.92 9.92 0 0 1 .82 3.68h1.98a4.5 4.5 0 0 0-2.8-3.68Zm2.8 4.68H17a9.92 9.92 0 0 1-.82 3.68 4.5 4.5 0 0 0 2.8-3.68Zm-4.47 4c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85h-2.98a8.9 8.9 0 0 0 .54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24Zm-1.67-.32a4.5 4.5 0 0 1-2.8-3.68H12a9.92 9.92 0 0 0 .82 3.68Z"
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