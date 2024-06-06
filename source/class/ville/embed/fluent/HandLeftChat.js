/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HandLeftChat",
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

   var pathdregular = "M16 6v3.2c-.32-.08-.66-.15-1-.18V6a.5.5 0 0 0-1 0v3.02c-.34.03-.68.1-1 .19V4.5a.5.5 0 0 0-1 0v4a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.85.37h-.01c-.22-.22-.44-.44-.72-.58-.7-.35-2.22-.57-2.4.5l.53.4c.52.4 1.04.78 1.48 1.24l1.33 1.38c.75.79 1.31 1.7 1.85 2.63.07.12.17.23.27.32l.01.01-.3.99a2.16 2.16 0 0 1-.84-.82c-.5-.87-1.02-1.7-1.72-2.43l-1.32-1.39c-.44-.46-.97-.84-1.49-1.23l-.59-.45a.6.6 0 0 1-.23-.47c0-.75.54-1.57 1.22-1.79A3.34 3.34 0 0 1 7 9.47V4.5a1.5 1.5 0 0 1 2.05-1.4 1.5 1.5 0 0 1 2.9 0A1.5 1.5 0 0 1 14 4.5v.09A1.5 1.5 0 0 1 16 6Zm3 8.5a4.5 4.5 0 0 1-6.68 3.94l-1.8.54a.4.4 0 0 1-.5-.5l.54-1.8A4.5 4.5 0 1 1 19 14.5ZM12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z";
   var pathdfilled = "M11 8.5V2.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0V3.75a.75.75 0 0 0-1.5 0v6.5a4.06 4.06 0 0 0-2-.75c-.97 0-1.79.32-1.98 1.12a.6.6 0 0 0-.02.14c0 .15.07.3.2.38l1.3.99c1.07.8 2.07 1.86 2.76 2.99.38.6.72 1.23 1.06 1.86.24.45.42.75.83.9l.34-1.1a5.48 5.48 0 0 1 4.02-7.7.5.5 0 0 1-.01-.08V3.75a.75.75 0 0 0-1.5 0V8.5a.5.5 0 0 1-1 0Zm5-3.25v3.96A5.5 5.5 0 0 0 14.5 9V5.25a.75.75 0 0 1 1.5 0Zm3 9.25a4.5 4.5 0 0 1-6.68 3.94l-1.8.54a.4.4 0 0 1-.5-.5l.54-1.8A4.5 4.5 0 1 1 19 14.5ZM12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z";
   
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