/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StreamInput",
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

   var pathdregular = "M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1h-.9l1 1A2 2 0 0 0 7 10V9ZM.5 14a.5.5 0 0 0 0 1h3.68l-2.14 2.15a.5.5 0 0 0 .7.7l3-2.99a.5.5 0 0 0 0-.72l-3-3a.5.5 0 0 0-.7.71L4.18 14H.5Zm9.5-3.5a4.5 4.5 0 0 1-3.15 4.3c.06-.35.01-.7-.12-1.02A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4A3.5 3.5 0 0 0 10 9.5v1ZM14 9a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1c0-1.1.9-2 2-2h3.5a.5.5 0 0 1 0 1H14Z";
   var pathdfilled = "M7.5 9.25a5.75 5.75 0 0 1 5.75-5.75h.5a.75.75 0 0 0 0-1.5h-.5C9.25 2 6 5.25 6 9.25v1c0 .41-.34.75-.75.75H4.9l1.3 1.3a2.25 2.25 0 0 0 1.3-2.05v-1ZM6.4 16.5l-1.23 1.23c.14.16.35.27.58.27h.5c4 0 7.25-3.25 7.25-7.25v-1c0-.41.34-.75.75-.75h3a.75.75 0 0 0 0-1.5h-3c-1.24 0-2.25 1-2.25 2.25v1c0 3.12-2.5 5.67-5.6 5.75Zm.8-3.09c.26.48.34 1.02.23 1.53a4.75 4.75 0 0 0 3.07-4.44v-1c0-1.8 1.46-3.25 3.25-3.25h3.5a.75.75 0 0 0 0-1.5h-3.5A4.75 4.75 0 0 0 9 9.5v1c0 1.28-.74 2.38-1.8 2.91Zm-5.48-2.44c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H.75a.75.75 0 0 1 0-1.5h2.69l-1.72-1.72a.75.75 0 0 1 0-1.06Z";
   
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