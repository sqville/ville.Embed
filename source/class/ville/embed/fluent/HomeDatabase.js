/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HomeDatabase",
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

   var pathdregular = "M11 2.39a1.5 1.5 0 0 0-2 0L3.5 7.33c-.32.28-.5.69-.5 1.12v7.05c0 .83.67 1.5 1.5 1.5h4.55a2.44 2.44 0 0 1-.05-.5V16H4.5a.5.5 0 0 1-.5-.5V8.45a.5.5 0 0 1 .17-.38l5.5-4.94a.5.5 0 0 1 .66 0l5.5 4.94.03.03a8.34 8.34 0 0 1 1.14.26 1.5 1.5 0 0 0-.5-1.03L11 2.39Zm6 7.03A7.86 7.86 0 0 0 14.5 9c-2.49 0-4.5 1.12-4.5 2.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08Zm1.17 4.72c-1 .55-2.29.86-3.67.86s-2.68-.3-3.67-.86c-.29-.16-.58-.36-.83-.59v2.95c0 1.38 2.01 2.5 4.5 2.5s4.5-1.12 4.5-2.5a2959.09 2959.09 0 0 1 0-2.95c-.25.23-.54.43-.83.6Z";
   var pathdfilled = "M9 2.39a1.5 1.5 0 0 1 2 0l5.5 4.94c.3.27.48.64.5 1.03A7.75 7.75 0 0 0 14.5 8c-1.38 0-2.68.3-3.67.86-.9.5-1.74 1.33-1.82 2.46L9 11.3v5.19c0 .17.02.34.05.5H4.5A1.5 1.5 0 0 1 3 15.5V8.45c0-.43.18-.84.5-1.12L9 2.39Zm8 7.03A7.86 7.86 0 0 0 14.5 9c-2.49 0-4.5 1.12-4.5 2.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08Zm1.17 4.72c-1 .55-2.29.86-3.67.86s-2.68-.3-3.67-.86c-.29-.16-.58-.36-.83-.59v2.95c0 1.38 2.01 2.5 4.5 2.5s4.5-1.12 4.5-2.5a2959.09 2959.09 0 0 1 0-2.95c-.25.23-.54.43-.83.6Z";
   
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