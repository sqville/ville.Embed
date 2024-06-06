/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CollectionsAdd",
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

   var pathdregular = "M15.5 7A2.5 2.5 0 0 1 18 9.33v.93a5.5 5.5 0 0 0-1-.66v-.1c0-.78-.6-1.42-1.35-1.5H9.5c-.78 0-1.42.6-1.5 1.35v6.15c0 .78.6 1.42 1.36 1.5H9.6c.18.36.4.7.66 1H9.5A2.5 2.5 0 0 1 7 15.66V9.5A2.5 2.5 0 0 1 9.34 7h6.16Zm-2.84-3.3.05.15L13.3 6h-1.04l-.5-1.89a1.5 1.5 0 0 0-1.7-1.1l-.14.04L4.1 4.6a1.5 1.5 0 0 0-1.09 1.7l.03.14 1.55 5.8a1.5 1.5 0 0 0 1.4 1.1v1a2.5 2.5 0 0 1-2.3-1.68l-.06-.17-1.55-5.8a2.5 2.5 0 0 1 1.6-3l.16-.05 5.8-1.56a2.5 2.5 0 0 1 2.96 1.46l.05.15ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 1 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1H15v-1.5Z";
   var pathdfilled = "M15.5 7A2.5 2.5 0 0 1 18 9.33v.93A5.5 5.5 0 0 0 10.26 18H9.5A2.5 2.5 0 0 1 7 15.66V9.5A2.5 2.5 0 0 1 9.34 7h6.16Zm-2.84-3.3.05.15L13.3 6H9a3 3 0 0 0-3 2.82V14.35a2.5 2.5 0 0 1-2.3-1.69l-.06-.17-1.55-5.8a2.5 2.5 0 0 1 1.6-3l.16-.05 5.8-1.56a2.5 2.5 0 0 1 2.96 1.46l.05.15ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 1 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1H15v-1.5Z";
   
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