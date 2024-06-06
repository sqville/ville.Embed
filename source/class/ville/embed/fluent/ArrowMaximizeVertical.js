/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowMaximizeVertical",
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

   var pathdregular = "M9.65 1.4c.2-.2.5-.2.7 0l2.12 2.13a.5.5 0 0 1-.7.7L10.5 2.96V7.5a.5.5 0 0 1-1 0V2.96L8.23 4.23a.5.5 0 1 1-.7-.7L9.65 1.4ZM4 10c0-.28.22-.5.5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 4 10Zm6.5 7.04V12.5a.5.5 0 0 0-1 0v4.54l-1.27-1.27a.5.5 0 1 0-.7.7l2.12 2.13c.2.2.5.2.7 0l2.12-2.12a.5.5 0 0 0-.7-.71l-1.27 1.27Z";
   var pathdfilled = "M9.58 1.33a.6.6 0 0 1 .84 0l2.13 2.13a.6.6 0 0 1-.85.84l-1.1-1.1v4.3a.6.6 0 1 1-1.2 0V3.2L8.3 4.3a.6.6 0 0 1-.85-.84l2.13-2.13ZM3.9 10c0-.33.27-.6.6-.6h11a.6.6 0 1 1 0 1.2h-11a.6.6 0 0 1-.6-.6Zm6.7 6.8v-4.3a.6.6 0 0 0-1.2 0v4.3l-1.1-1.1a.6.6 0 0 0-.85.85l2.13 2.12a.6.6 0 0 0 .84 0l2.13-2.12a.6.6 0 1 0-.85-.85l-1.1 1.1Z";
   
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