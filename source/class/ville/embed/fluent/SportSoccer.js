/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SportSoccer",
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

   var pathdregular = "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.34 3.2a7.02 7.02 0 0 1 3.33 0L10 4.17 8.34 3.2Zm-1.25.43 2.41 1.4v1.7L6.73 8.7l-1.56-.57-.62-2.51a7.02 7.02 0 0 1 2.54-1.98ZM3.8 6.75l.4 1.58-1.17 1.03c.08-.94.35-1.82.77-2.61Zm-.77 3.94 1.83-1.62 1.55.56 1.04 3.3L6.73 14H4.25a6.96 6.96 0 0 1-1.22-3.3ZM5.1 15h1.55l.51 1.41A7.01 7.01 0 0 1 5.1 15Zm3.27 1.82-.81-2.25.7-1.06h3.47l.72 1.06-.82 2.25a7.02 7.02 0 0 1-3.26 0Zm4.47-.41.51-1.4h1.55a7.02 7.02 0 0 1-2.06 1.4Zm2.9-2.4h-2.47l-.72-1.08 1.02-3.29 1.57-.56 1.83 1.62a6.96 6.96 0 0 1-1.22 3.3Zm1.23-4.64-1.16-1.03.4-1.58c.4.8.68 1.68.76 2.6Zm-1.51-3.74-.63 2.5-1.58.57-2.75-1.95v-1.7l2.4-1.4c1 .45 1.88 1.13 2.56 1.98ZM7.4 9.45 10 7.6l2.59 1.84-.96 3.05H8.37L7.4 9.45Z";
   var pathdfilled = "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM7.1 3.63l2.4 1.4v1.7L6.73 8.7l-1.56-.57-.62-2.51a7.02 7.02 0 0 1 2.54-1.98ZM3.02 10.7l1.83-1.62 1.55.56 1.04 3.3L6.73 14H4.25a6.96 6.96 0 0 1-1.22-3.3Zm5.34 6.12-.81-2.25.7-1.06h3.47l.72 1.06-.82 2.25a7.02 7.02 0 0 1-3.26 0ZM15.75 14h-2.48l-.72-1.08 1.02-3.29 1.57-.56 1.83 1.62a6.96 6.96 0 0 1-1.22 3.3Zm-.3-8.38-.62 2.5-1.58.57-2.75-1.95v-1.7l2.4-1.4c1 .45 1.88 1.13 2.56 1.98Z";
   
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