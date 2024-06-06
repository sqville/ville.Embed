/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleCarCollision",
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

   var pathdregular = "M9.36 2.02a.5.5 0 0 1 .56.2l1.72 2.59 2.58-1.73a.5.5 0 0 1 .77.54L14.14 7h3.36a.5.5 0 0 1 .35.85l-2.57 2.57 2.5 1.66a.5.5 0 0 1-.28.92h-3a.5.5 0 1 1 0-1h1.35l-1.63-1.08a.5.5 0 0 1-.07-.77L16.29 8H13.5a.5.5 0 0 1-.49-.62l.7-2.75-1.93 1.29a.5.5 0 0 1-.7-.14L10 4.15V5.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .36-.48ZM4.75 14.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 11c.6.46 1 1.18 1 2v4a1 1 0 1 1-2 0v-.5H4v.5a1 1 0 1 1-2 0v-4c0-.82.4-1.54 1-2h-.5a.5.5 0 1 1 0-1h.66l.14-.83A2 2 0 0 1 5.27 7.5h4.46a2 2 0 0 1 1.97 1.67l.14.83h.66a.5.5 0 0 1 0 1H12ZM5.27 8.5a1 1 0 0 0-.99.84l-.2 1.2c.14-.03.28-.04.42-.04h6l.42.03-.2-1.2a1 1 0 0 0-1-.83H5.28ZM3 13v2.5h9V13c0-.83-.67-1.5-1.5-1.5h-6c-.83 0-1.5.67-1.5 1.5Z";
   var pathdfilled = "M9.36 2.02a.5.5 0 0 1 .56.2l1.72 2.59 2.58-1.73a.5.5 0 0 1 .77.54L14.14 7h3.36a.5.5 0 0 1 .35.85l-2.57 2.57 2.5 1.66a.5.5 0 0 1-.28.92h-3a.5.5 0 1 1 0-1h1.35l-1.63-1.08a.5.5 0 0 1-.07-.77L16.29 8H13.5a.5.5 0 0 1-.49-.62l.7-2.75-1.93 1.29a.5.5 0 0 1-.7-.14L10 4.15V5.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .36-.48ZM2.5 10a.5.5 0 1 0 0 1H3c-.6.46-1 1.18-1 2v4a1 1 0 0 0 2 0v-.5h7v.5a1 1 0 0 0 2 0v-4c0-.82-.4-1.54-1-2h.5a.5.5 0 0 0 0-1h-.66l-.14-.83A2 2 0 0 0 9.73 7.5H5.27A2 2 0 0 0 3.3 9.17l-.14.83H2.5Zm1.58.53.2-1.2a1 1 0 0 1 1-.83h4.45a1 1 0 0 1 .99.84l.2 1.2a2.52 2.52 0 0 0-.42-.04h-6l-.42.03Zm1.42 3.22a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4.75.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z";
   
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