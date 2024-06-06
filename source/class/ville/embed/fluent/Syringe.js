/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Syringe",
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

   var pathdregular = "M14.15 2.15c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7l-.4-.4-1.8 1.8 1.9 1.9a.5.5 0 0 1-.7.7L15 8.71l-5.56 5.56a2.5 2.5 0 0 1-1.77.73H5.71l-2.86 2.85a.5.5 0 0 1-.7-.7L5 14.29v-1.96c0-.66.26-1.3.73-1.77L11.3 5l-1.14-1.15a.5.5 0 0 1 .7-.7l1.9 1.9 1.8-1.8-.4-.4a.5.5 0 0 1 0-.7ZM10 7.7l-.8.79.65.65a.5.5 0 0 1-.7.7l-.65-.64-.8.79.65.65a.5.5 0 0 1-.7.7L7 10.71l-.56.56A1.5 1.5 0 0 0 6 12.33V14h1.67c.4 0 .78-.16 1.06-.44L14.3 8 12 5.7 10.7 7l.65.65a.5.5 0 0 1-.7.7L10 7.71Zm6.04-2.96-.79-.8-1.8 1.8.8.8 1.8-1.8Z";
   var pathdfilled = "M14.15 2.15c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7l-.4-.4-1.8 1.8 1.9 1.9a.5.5 0 0 1-.7.7L15 8.71l-5.56 5.56a2.5 2.5 0 0 1-1.77.73H5.71l-2.86 2.85a.5.5 0 0 1-.7-.7L5 14.29v-1.96c0-.66.26-1.3.73-1.77L6.3 10l.86.85a.5.5 0 0 0 .7-.7L7 9.29l.8-.79.85.85a.5.5 0 1 0 .7-.7l-.85-.86.8-.79.85.85a.5.5 0 0 0 .7-.7L10 6.29 11.3 5l-1.15-1.15a.5.5 0 0 1 .7-.7l1.9 1.9 1.8-1.8-.4-.4a.5.5 0 0 1 0-.7Zm1.9 2.6-.8-.8-1.8 1.8.8.8 1.8-1.8Z";
   
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