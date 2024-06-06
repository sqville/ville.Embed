/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EditPerson",
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

   var pathdregular = "M17.18 2.93a2.97 2.97 0 0 0-4.26-.06l-9.37 9.38c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.93-.87c.46-.1.9-.34 1.23-.68l4.06-4.06c-.17-.34-.28-.7-.32-1.1l-4.45 4.45c-.2.2-.46.35-.74.41l-3.16.7.7-3.18c.07-.27.2-.51.4-.7l8-8 2.78 2.8-.26.25c.4.04.76.15 1.1.32l1.25-1.25a2.97 2.97 0 0 0 .05-4.15Zm-3.55.65a1.97 1.97 0 0 1 2.8 2.8l-.68.66-2.8-2.79.68-.67ZM16.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S11 16.75 11 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   var pathdfilled = "M12.92 2.87a2.97 2.97 0 0 1 4.2 4.21l-.66.67-4.2-4.2.66-.68Zm-1.38 1.38-8 8c-.32.33-.55.74-.65 1.2l-.88 3.94a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68l4.06-4.07a3 3 0 0 1 3.61-4.22l-3.9-3.9ZM16.5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S11 16.75 11 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   
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