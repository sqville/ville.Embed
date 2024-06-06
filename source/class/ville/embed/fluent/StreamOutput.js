/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StreamOutput",
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

   var pathdregular = "M16.15 2.15c.2-.2.5-.2.7 0l3 2.99a.5.5 0 0 1 0 .72l-3 3a.5.5 0 0 1-.7-.71L18.29 6H13.5C11.6 6 10 7.6 10 9.5v1C10 13 8 15 5.5 15h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3C7.4 14 9 12.4 9 10.5v-1C9 7 11 5 13.5 5h4.8l-2.15-2.15a.5.5 0 0 1 0-.7ZM2.5 12H5a2 2 0 0 0 2-2V9c0-3.3 2.7-6 6-6h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H13C9.1 2 6 5.1 6 9v1c0 .6-.4 1-1 1H2.5c-.3 0-.5.2-.5.5s.2.5.5.5Zm12.6-4H14a2 2 0 0 0-2 2v1c0 3.3-2.7 6-6 6h-.5c-.3 0-.5.2-.5.5s.2.5.5.5H6c3.9 0 7-3.1 7-7v-1c0-.6.4-1 1-1h1.1c-.1-.3-.1-.7 0-1Z";
   var pathdfilled = "M16.78 1.97a.75.75 0 1 0-1.06 1.06l1.72 1.72h-3.69A4.75 4.75 0 0 0 9 9.5v1c0 1.8-1.46 3.25-3.25 3.25h-3a.75.75 0 0 0 0 1.5h3a4.75 4.75 0 0 0 4.75-4.75v-1c0-1.8 1.46-3.25 3.25-3.25h3.69l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3ZM13.25 3.5A5.75 5.75 0 0 0 7.5 9.25v1c0 1.24-1 2.25-2.25 2.25h-2.5a.75.75 0 0 1 0-1.5h2.5c.41 0 .75-.34.75-.75v-1C6 5.25 9.25 2 13.25 2h.5a.75.75 0 0 1 0 1.5h-.5Zm.91 4c-.24.49-.3 1.03-.17 1.54-.28.1-.49.39-.49.71v1c0 4-3.25 7.25-7.25 7.25h-.5a.75.75 0 0 1 0-1.5h.5A5.75 5.75 0 0 0 12 10.75v-1c0-1.21.96-2.2 2.16-2.25Z";
   
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