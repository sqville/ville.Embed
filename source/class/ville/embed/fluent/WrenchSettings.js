/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WrenchSettings",
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

   var pathdregular = "M9 6.5a4.5 4.5 0 0 1 6.35-4.1.5.5 0 0 1 .15.8l-2.3 2.3 1.3 1.3 2.3-2.3a.5.5 0 0 1 .8.15 4.49 4.49 0 0 1-.76 4.87 5.46 5.46 0 0 0-1.05-.37 3.5 3.5 0 0 0 1.14-3.37l-2.08 2.07a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 0-.7l2.07-2.08a3.52 3.52 0 0 0-4.1 4.32.5.5 0 0 1-.13.47L3.38 14.7a1.36 1.36 0 0 0 1.94 1.9l4.06-4.11A5.48 5.48 0 0 0 9 14.3L6.03 17.3a2.36 2.36 0 0 1-3.37-3.3l6.42-6.65A4.52 4.52 0 0 1 9 6.5Zm1.64 7.42a2 2 0 0 0 1.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.46-.12Zm2.86.58a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z";
   var pathdfilled = "M13.5 2a4.5 4.5 0 0 0-4.42 5.36l-6.42 6.66a2.36 2.36 0 0 0 3.37 3.3L9 14.3a5.5 5.5 0 0 1 7.84-4.78 4.48 4.48 0 0 0 1.05-4.03.5.5 0 0 0-.84-.24L14.5 7.79 12.2 5.5l2.55-2.55a.5.5 0 0 0-.24-.84 4.51 4.51 0 0 0-1-.11Zm-2.86 11.92a2 2 0 0 0 1.43-2.48l-.16-.55c.25-.2.53-.37.82-.5l.34.36a2 2 0 0 0 2.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 0 0 1.46 2.52l.35.09a4.7 4.7 0 0 1 0 1.01l-.45.12a2 2 0 0 0-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 0 0-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 0 0-1.46-2.52l-.35-.09a4.71 4.71 0 0 1 0-1.01l.46-.12Zm2.86.58a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z";
   
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