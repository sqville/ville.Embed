/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoxArrowLeft",
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

   var pathdregular = "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.44.17.9.26 1.38.25a5.5 5.5 0 0 1-.62-1.06 2.5 2.5 0 0 1-.39-.12l-5.76-2.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6v3.36c.25-.54.6-1.04 1-1.48V8.84l6.5-2.6V9.6c.36.18.7.4 1 .66V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm12.63 10a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-6.86-.34 2-2a.5.5 0 1 1 .71.7L13.71 14h2.79a.5.5 0 0 1 0 1h-2.8l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1-.15-.35.5.5 0 0 1 .14-.35Z";
   var pathdfilled = "M17.42 5 14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96ZM2 6.18c0-.11.01-.22.04-.33L9.5 8.84v3.36a5.48 5.48 0 0 0 0 4.6v.93a3.5 3.5 0 0 1-.8-.21l-5.76-2.3a1.5 1.5 0 0 1-.94-1.4V6.18Zm16 0v4.08a5.48 5.48 0 0 0-7.5.46V8.84l7.46-2.99c.03.1.04.22.04.33Zm1 8.32a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-6.86-.35 2-2a.5.5 0 1 1 .71.7L13.71 14h2.79a.5.5 0 0 1 0 1h-2.8l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1-.15-.35.5.5 0 0 1 .14-.35Z";
   
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