/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DeveloperBoardLightning",
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

   var pathdregular = "M10.99 7.54 10.57 9h1.53c.34 0 .52.4.3.66l-2.65 3.19c-.3.35-.86.05-.73-.4L9.46 11H7.9a.4.4 0 0 1-.3-.66l2.66-3.19c.3-.34.85-.05.73.39ZM8 2.5a.5.5 0 0 0-1 0V4h-.5A2.5 2.5 0 0 0 4 6.5V7H2.5a.5.5 0 0 0 0 1H4v1.5H2.5a.5.5 0 0 0 0 1H4V12H2.5a.5.5 0 0 0 0 1H4v.5A2.5 2.5 0 0 0 6.5 16H7v1.5a.5.5 0 0 0 1 0V16h1.5v1.5a.5.5 0 0 0 1 0V16H12v1.5a.5.5 0 0 0 1 0V16h.5a2.5 2.5 0 0 0 2.5-2.5V13h1.5a.5.5 0 0 0 0-1H16v-1.5h1.5a.5.5 0 0 0 0-1H16V8h1.5a.5.5 0 0 0 0-1H16v-.5A2.5 2.5 0 0 0 13.5 4H13V2.5a.5.5 0 0 0-1 0V4h-1.5V2.5a.5.5 0 0 0-1 0V4H8V2.5ZM13.5 5c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 13.5v-7C5 5.67 5.67 5 6.5 5h7Z";
   var pathdfilled = "M8 2.5a.5.5 0 0 0-1 0V4h-.5A2.5 2.5 0 0 0 4 6.5V7H2.5a.5.5 0 0 0 0 1H4v1.5H2.5a.5.5 0 0 0 0 1H4V12H2.5a.5.5 0 0 0 0 1H4v.5A2.5 2.5 0 0 0 6.5 16H7v1.5a.5.5 0 0 0 1 0V16h1.5v1.5a.5.5 0 0 0 1 0V16H12v1.5a.5.5 0 0 0 1 0V16h.5a2.5 2.5 0 0 0 2.5-2.5V13h1.5a.5.5 0 0 0 0-1H16v-1.5h1.5a.5.5 0 0 0 0-1H16V8h1.5a.5.5 0 0 0 0-1H16v-.5A2.5 2.5 0 0 0 13.5 4H13V2.5a.5.5 0 0 0-1 0V4h-1.5V2.5a.5.5 0 0 0-1 0V4H8V2.5Zm2.99 5.04L10.57 9h1.53c.34 0 .52.4.3.66l-2.65 3.19c-.3.35-.86.05-.73-.4L9.46 11H7.9a.4.4 0 0 1-.3-.66l2.66-3.19c.3-.34.85-.05.73.39Z";
   
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