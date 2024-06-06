/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Cellular5g",
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

   var pathdregular = "M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 0 0 2.5 0h-1a.5.5 0 0 1 0-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 0 1-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 1 1-.89.46.86.86 0 0 0-.48-.42C9.63 3.01 9.51 3 9.5 3Zm7 2a.5.5 0 0 1 .5.41v11.1a.5.5 0 0 1-.99.08V5.5c0-.28.22-.5.5-.5Zm-9 6a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V11.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V13.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V9.5c0-.28.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V7.5c0-.27.22-.5.5-.5ZM2.75 2a.5.5 0 0 0-.5.44l-.25 2a.5.5 0 0 0 .54.56l.18-.02 1.37-.11c.49-.04.91.35.91.84v.22C5 6.52 4.52 7 3.93 7a.98.98 0 0 1-.75-.32 1.23 1.23 0 0 1-.2-.3l-.01-.02a.5.5 0 0 0-.94.36l.01.02a1.44 1.44 0 0 0 .1.2A1.98 1.98 0 0 0 3.93 8C5.07 8 6 7.07 6 5.93V5.7c0-1.08-.92-1.93-2-1.84l-.93.08L3.2 3H5.5a.5.5 0 0 0 0-1H2.75Z";
   var pathdfilled = "M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 0 0 2.5 0h-1a.5.5 0 0 1 0-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 0 1-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 1 1-.89.46.86.86 0 0 0-.48-.42C9.63 3.01 9.51 3 9.5 3ZM4.75 13c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V9.75c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 0 1-1.5.11V7.75c0-.41.34-.75.75-.75Zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 0 1-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75Zm-14-3a.5.5 0 0 0-.5.44l-.25 2a.5.5 0 0 0 .54.56l.18-.02 1.37-.11c.49-.04.91.35.91.84v.22C5 6.52 4.52 7 3.93 7a.98.98 0 0 1-.75-.32 1.23 1.23 0 0 1-.2-.3l-.01-.02a.5.5 0 0 0-.94.36l.01.02a1.44 1.44 0 0 0 .1.2A1.98 1.98 0 0 0 3.93 8C5.07 8 6 7.07 6 5.93V5.7c0-1.08-.92-1.93-2-1.84l-.93.08L3.2 3H5.5a.5.5 0 0 0 0-1H2.75Z";
   
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