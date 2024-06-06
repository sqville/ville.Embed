/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextClearFormatting",
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

   var pathdregular = "M6 2c.2 0 .4.13.47.32l3.5 8.95a.5.5 0 0 1-.94.37L8.01 9H4l-1.04 2.68a.5.5 0 1 1-.94-.36l3.5-9A.5.5 0 0 1 6 2Zm0 1.88L4.4 8H7.6l-1.6-4.12ZM11.5 2c.28 0 .5.22.5.5v3.52a2.48 2.48 0 0 1 2.26-1.3c.89 0 1.6.34 2.15 1 .55.66.82 1.54.82 2.64l-.01.42-.05-.05a2.49 2.49 0 0 0-1.15-.65 2.86 2.86 0 0 0-.53-1.62c-.36-.47-.86-.7-1.48-.7-.6 0-1.09.24-1.47.72-.3.37-.47.83-.54 1.37v1.03c.05.43.18.8.37 1.12L11 11.37V2.5c0-.28.22-.5.5-.5ZM9.44 16.47a1.5 1.5 0 0 1 0-2.13l4.9-4.9a1.5 1.5 0 0 1 2.13 0l2.1 2.1a1.5 1.5 0 0 1-.01 2.12L14.22 18h2.53a.5.5 0 1 1 0 1h-4.1a1.5 1.5 0 0 1-1.12-.44l-2.1-2.1Zm5.61-6.32-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 0 0 0-.7l-2.1-2.1a.5.5 0 0 0-.7 0Zm-1.5 7.1-2.8-2.8-.6.6a.5.5 0 0 0 0 .7l2.1 2.1c.19.2.5.2.7 0l.6-.6Z";
   var pathdfilled = "M6 2c.2 0 .4.13.47.32l3.5 8.95a.5.5 0 0 1-.94.37L8.01 9H4l-1.04 2.68a.5.5 0 1 1-.94-.36l3.5-9A.5.5 0 0 1 6 2Zm0 1.88L4.4 8H7.6l-1.6-4.12ZM11.5 2c.28 0 .5.22.5.5v3.52a2.48 2.48 0 0 1 2.26-1.3c.89 0 1.6.34 2.15 1 .55.66.82 1.54.82 2.64l-.01.42-.05-.05a2.49 2.49 0 0 0-1.15-.65 2.86 2.86 0 0 0-.53-1.62c-.36-.47-.86-.7-1.48-.7-.6 0-1.09.24-1.47.72-.3.37-.47.83-.54 1.37v1.03c.05.43.18.8.37 1.12L11 11.37V2.5c0-.28.22-.5.5-.5Zm4.97 7.44 2.1 2.1a1.5 1.5 0 0 1-.01 2.12l-3.6 3.6-4.21-4.22 3.6-3.6a1.5 1.5 0 0 1 2.12 0Zm-2.22 8.52-4.21-4.21-.6.6a1.5 1.5 0 0 0 0 2.12l2.1 2.1c.3.3.71.45 1.12.43h4.09a.5.5 0 1 0 0-1h-2.53l.03-.04Z";
   
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