/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle8",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-3.5c.86 0 1.5.65 1.5 1.38 0 .72-.64 1.37-1.5 1.37S8.5 8.6 8.5 7.87c0-.72.64-1.37 1.5-1.37Zm1.57 3.22c.56-.43.93-1.09.93-1.85A2.44 2.44 0 0 0 10 5.5a2.44 2.44 0 0 0-2.5 2.38c0 .75.37 1.41.93 1.84a2.58 2.58 0 0 0-1.18 2.15A2.69 2.69 0 0 0 10 14.5c1.5 0 2.75-1.15 2.75-2.63 0-.9-.47-1.68-1.18-2.15Zm-1.57.53c1 0 1.75.75 1.75 1.63 0 .87-.76 1.62-1.75 1.62-1 0-1.75-.75-1.75-1.63 0-.87.76-1.62 1.75-1.62Z";
   var pathdfilled = "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 4.5c-.86 0-1.5.65-1.5 1.38 0 .72.64 1.37 1.5 1.37s1.5-.65 1.5-1.38c0-.72-.64-1.37-1.5-1.37Zm1.57 3.22c.7.47 1.18 1.25 1.18 2.15A2.69 2.69 0 0 1 10 14.5a2.69 2.69 0 0 1-2.75-2.63c0-.9.47-1.68 1.18-2.15a2.32 2.32 0 0 1-.93-1.85A2.44 2.44 0 0 1 10 5.5c1.35 0 2.5 1.03 2.5 2.38 0 .75-.37 1.41-.93 1.84Zm-1.57.53c-1 0-1.75.75-1.75 1.63 0 .87.76 1.62 1.75 1.62 1 0 1.75-.75 1.75-1.63 0-.87-.76-1.62-1.75-1.62Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});