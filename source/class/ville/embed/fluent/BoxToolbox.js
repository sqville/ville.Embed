/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoxToolbox",
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

   var pathdregular = "M11.3 2.48a3.5 3.5 0 0 0-2.6 0l-5.76 2.3A1.5 1.5 0 0 0 2 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.3.1v-1.06L3.31 14.3a.5.5 0 0 1-.31-.47V6.24l6.5 2.6V12c.26-.34.6-.62 1-.8V8.85l6.5-2.6V9.5c.5.37.84.91.96 1.54l.04.01V6.18a1.5 1.5 0 0 0-.94-1.4l-5.76-2.3Zm-2.23.93a2.5 2.5 0 0 1 1.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54Zm-2.7 1.08 6.16 2.46L10 7.96 3.85 5.5l2.53-1.01Zm5.63 7.5v-.5c0-.82.67-1.49 1.5-1.49h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm3.5-1h-2a.5.5 0 0 0-.5.5v.5h3v-.5a.5.5 0 0 0-.5-.5ZM17 16.5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0Z";
   var pathdfilled = "M17.42 5 14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96Zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3.3.1V13.5c0-.56.19-1.08.5-1.5V8.84L2.04 5.85ZM18 6.17v4.87h-.04A2.5 2.5 0 0 0 15.5 9h-2a2.5 2.5 0 0 0-2.46 2.04c-.19.04-.37.1-.54.17V8.84l7.46-2.99c.03.1.04.22.04.33ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 1 0 1 0V16h3v.5a.5.5 0 1 0 1 0Z";
   
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