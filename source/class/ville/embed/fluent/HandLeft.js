/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HandLeft",
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

   var pathdregular = "M16 12.02c0 1.06-.2 2.1-.6 3.08l-.6 1.42a2.55 2.55 0 0 1-1.17 1.29c-.27.14-.56.21-.86.21h-2.55c-.77 0-1.49-.41-1.87-1.08-.5-.87-1.02-1.7-1.72-2.43l-1.32-1.39c-.44-.46-.97-.84-1.49-1.23l-.59-.45a.6.6 0 0 1-.23-.47c0-.75.54-1.57 1.22-1.79A3.34 3.34 0 0 1 7 9.47V4.5a1.5 1.5 0 0 1 2.05-1.4 1.5 1.5 0 0 1 2.9 0A1.5 1.5 0 0 1 14 4.5v.09A1.5 1.5 0 0 1 16 6v6.02ZM12 4.5v4a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.85.37h-.01c-.22-.22-.44-.44-.72-.58-.7-.35-2.22-.57-2.4.5l.53.4c.52.4 1.04.78 1.48 1.24l1.33 1.38c.75.79 1.31 1.7 1.85 2.63.21.36.6.58 1.01.58h2.55c.13 0 .27-.03.4-.1.32-.17.57-.44.71-.78l.59-1.42c.35-.86.53-1.78.53-2.7V6a.5.5 0 0 0-1 0v3.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-1 0Z";
   var pathdfilled = "M11 8.5V2.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0V3.75a.75.75 0 0 0-1.5 0v6.5a4.06 4.06 0 0 0-2-.75c-.97 0-1.79.32-1.98 1.12a.6.6 0 0 0-.02.14c0 .15.07.3.2.38l1.3.99c1.07.8 2.07 1.86 2.76 2.99.38.6.72 1.23 1.06 1.86.36.68.59 1.02 1.68 1.02h3.05c.95 0 1.31-.53 1.95-2 .64-1.47 1-2.94 1-3.5V5.25a.75.75 0 0 0-1.5 0V9a.5.5 0 0 1-1 0V3.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0Z";
   
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