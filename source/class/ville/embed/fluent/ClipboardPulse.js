/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClipboardPulse",
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

   var pathdregular = "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V10h-1V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5V10H4V4.5C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM15 13h1v3.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5V13h1v3.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V13ZM8.98 6.85a.5.5 0 0 0-.94-.05L6.18 11H2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .46-.3L8.4 8.42l1.61 5.23a.5.5 0 0 0 .93.07l1.55-3.1.55 1.1a.5.5 0 0 0 .45.28h4a.5.5 0 0 0 0-1h-3.7l-.85-1.72a.5.5 0 0 0-.9 0l-1.44 2.88-1.63-5.3Z";
   var pathdfilled = "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V10h-1.57l-.59-1.17a1.5 1.5 0 0 0-2.68 0l-.33.65-.9-2.92a1.5 1.5 0 0 0-2.8-.17L5.53 10H4V4.5C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm5 10H16v3.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5V13h2.5c.6 0 1.13-.35 1.37-.9l.37-.83.83 2.67a1.5 1.5 0 0 0 2.77.23l.74-1.48c.26.2.58.31.92.31ZM8.98 6.85a.5.5 0 0 0-.94-.05L6.18 11H2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .46-.3L8.4 8.42l1.61 5.23a.5.5 0 0 0 .93.07l1.55-3.1.55 1.1a.5.5 0 0 0 .45.28h4a.5.5 0 0 0 0-1h-3.7l-.85-1.72a.5.5 0 0 0-.9 0l-1.44 2.88-1.63-5.3Z";
   
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