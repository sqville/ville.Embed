/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentJava",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v7.09c.58.2 1 .76 1 1.41V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v3.67a1.5 1.5 0 0 1 1-.65v-3.6c0-.4-.16-.79-.44-1.07l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7Zm-3.05 11a.5.5 0 0 0 .47-.33l1.75-5a.5.5 0 1 0-.94-.33l-1.28 3.65-1.28-3.65a.5.5 0 1 0-.94.33l1.75 5c.07.2.26.33.47.33Zm4.97-5.66a.5.5 0 0 0-.94 0l-1.75 5a.5.5 0 1 0 .94.33l.23-.67h2.1l.23.67a.5.5 0 1 0 .94-.34l-1.75-5Zm.23 3.66h-1.4l.7-1.99.7 1.99ZM3.5 12c.28 0 .5.22.5.5v4a1.5 1.5 0 0 1-3 0V16a.5.5 0 1 1 1 0v.5a.5.5 0 0 0 1 0v-4c0-.28.22-.5.5-.5Zm3.75 0c.21 0 .4.13.47.34l1.75 5a.5.5 0 1 1-.94.33L8.3 17H6.2l-.23.67a.5.5 0 1 1-.94-.33l1.75-5a.5.5 0 0 1 .47-.34Zm0 2.01L6.55 16h1.4l-.7-1.99Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v3.02c-.5.08-.92.41-1.13.88a1.5 1.5 0 0 0-2.79.1l-.33.96-.33-.96a1.5 1.5 0 0 0-2.8-.1 1.5 1.5 0 0 0-2.79.1L5 14.4V12.5c0-.65-.42-1.2-1-1.41V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM11.75 18a.5.5 0 0 0 .47-.33l1.75-5a.5.5 0 1 0-.94-.33l-1.28 3.65-1.28-3.65a.5.5 0 1 0-.94.33l1.75 5c.07.2.26.33.47.33Zm4.97-5.66a.5.5 0 0 0-.94 0l-1.75 5a.5.5 0 1 0 .94.33l.23-.67h2.1l.23.67a.5.5 0 1 0 .94-.34l-1.75-5Zm.23 3.66h-1.4l.7-1.99.7 1.99ZM3.5 12c.28 0 .5.22.5.5v4a1.5 1.5 0 0 1-3 0V16a.5.5 0 1 1 1 0v.5a.5.5 0 0 0 1 0v-4c0-.28.22-.5.5-.5Zm3.75 0c.21 0 .4.13.47.34l1.75 5a.5.5 0 1 1-.94.33L8.3 17H6.2l-.23.67a.5.5 0 1 1-.94-.33l1.75-5a.5.5 0 0 1 .47-.34Zm0 2.01L6.55 16h1.4l-.7-1.99Z";
   
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